use anchor_lang::prelude::*;

<<<<<<< HEAD
declare_id!("5PEiejjMZfsefWvV63HYD8Nry52bY3r6N3cWigccxs7m");
=======
declare_id!("EnWowVGkXJuEZtqPnjDt8mnB2gMhGvv7Kzs7Zyo7jjj6");
>>>>>>> 1dfab7b3380d9b1a7e377787515c69355a3aa2c5

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
<<<<<<< HEAD
=======

        // Check that deadline is in the future
        let current_time = Clock::get()?.unix_timestamp;
 
        require!(
            deadline > current_time,
            FundraiserError::DeadlinePast
        );

>>>>>>> 1dfab7b3380d9b1a7e377787515c69355a3aa2c5
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
