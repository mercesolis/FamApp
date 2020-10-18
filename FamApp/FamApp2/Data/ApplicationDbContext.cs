using FamApp2.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FamApp2.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        
        public DbSet<FamilyUser>FamilyUsers { get; set; }
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder){
            builder.Entity<FamilyUser>()
            .HasData(
                new FamilyUser {Id = 1, Name = "Mercedes", UserID = "8877cebd-2eef-4426-be63-4ed0ea251a69"}
            );
            base.OnModelCreating(builder);
        }
    }
}
