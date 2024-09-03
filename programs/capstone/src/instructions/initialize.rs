use anchor_lang::prelude::*;
use anchor_spl::{ associated_token::AssociatedToken, token::{ Mint, Token, TokenAccount } };

use crate::{ error::FundraiserError, state::Fundraiser, ANCHOR_DISCRIMINATOR, MIN_AMOUNT_TO_RAISE };

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(mut)]
    pub maker: Signer<'info>,
    pub campaign_mint_to_raise: Account<'info, Mint>,

    #[account(
        init,
        payer = maker,
        seeds = [b"fundraiser-grav.id", maker.key().as_ref()],
        bump,
        space = ANCHOR_DISCRIMINATOR + Fundraiser::INIT_SPACE,
    )]
    pub fundraiser : Account<'info, Fundraiser>,

    #[account(
        init,
        payer = maker,
        associated_token::mint = campaign_mint_to_raise,
        associated_token::authority = fundraiser,
    )]
    pub vault: Account<'info, TokenAccount>,
    
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, Token>,
    pub associated_token_program: Program<'info, AssociatedToken>,
}


impl<'info> Initialize<'info> {
    pub fn initialize(&mut self, amount: u64, campaign_duration: u8, bumps: &InitializeBumps) -> Result<()> {

        // Check and see if the amount to raise meets the minimum amount required
        require!(
            amount > MIN_AMOUNT_TO_RAISE.pow(self.campaign_mint_to_raise.decimals as u32),
            FundraiserError::InvalidAmount
        );

        // Initialize the fundraiser account
        self.fundraiser.set_inner(Fundraiser {
            maker: self.maker.key(),
            campaign_mint_to_raise: self.campaign_mint_to_raise.key(),
            target_amount_to_raise: amount,
            current_fund_raised: 0,
            time_started_campaign: Clock::get()?.unix_timestamp,
            campaign_duration,
            bump: bumps.fundraiser
        });
        
        Ok(())
    }
}