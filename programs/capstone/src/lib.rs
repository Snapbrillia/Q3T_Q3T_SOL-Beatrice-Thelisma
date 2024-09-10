use anchor_lang::prelude::*;

declare_id!("kQCXgZfU3WNRyASyjmHgTi6ZJNPv24u3aqs3m58c46d");

mod state;
mod instructions;
mod error;
mod constants;

use instructions::*;
use error::*;
pub use constants::*;

#[program]
pub mod capstone {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, amount: u64, deadline: i64) -> Result<()> {

        ctx.accounts.initialize(amount, deadline, &ctx.bumps)?;

        Ok(())
    }

    pub fn contribute(ctx: Context<Contribute>, amount: u64) -> Result<()> {

        ctx.accounts.contribute(amount)?;

        Ok(())
    }

    pub fn check_contributions(ctx: Context<CheckContributions>) -> Result<()> {

        ctx.accounts.check_contributions()?;

        Ok(())
    }

    pub fn refund(ctx: Context<Refund>) -> Result<()> {

        ctx.accounts.refund()?;

        Ok(())
    }
}
