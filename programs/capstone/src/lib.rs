use anchor_lang::prelude::*;


declare_id!("EnWowVGkXJuEZtqPnjDt8mnB2gMhGvv7Kzs7Zyo7jjj6");


mod state;
mod instructions;
mod error;
mod constants;

use instructions::*;
use error::*;
pub use constants::*;

#[program]
pub mod capstone {
    use instruction::Withdraw;

    use super::*;

    pub fn initialize(ctx: Context<Initialize>, amount: u64, deadline: i64) -> Result<()> {
        ctx.accounts.initialize(amount, deadline, &ctx.bumps)?;

        Ok(())
    }

    pub fn contribute(ctx: Context<Contribute>, amount: u64) -> Result<()> {
        ctx.accounts.contribute(amount)?;

        Ok(())
    }

    pub fn withdraw(ctx: Context<Withdraw>) -> Result<()> {
        ctx.accounts.withdraw()?;

        Ok(())
    }

    pub fn refund(ctx: Context<Refund>) -> Result<()> {
        ctx.accounts.refund()?;

        Ok(())
    }
}
