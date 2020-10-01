using AutoMapper.Configuration;
using capstone.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace capstone.Data
{

    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public IConfiguration Configuration { get; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<DbzMember> DbzMembers { get; set;}
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {

        }
        public ApplicationDbContext() : base(new DbContextOptionsBuilder<ApplicationDbContext>().UseSqlite("Data Source=app.db").Options,null)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<DbzMember>()
            .HasData
            (new DbzMember { 
                Id = 1, 
                Name = "Goku", 
                Attack = "Spirit Bomb, Kamehameha",
                UserId = "00973448-2f4b-44ec-a2d9-dbbc9663eb93"},
            new DbzMember { 
                Id = 2, 
                Name = "Vegeta", 
                Attack = "Galick Gun",
                UserId = "00973448-2f4b-44ec-a2d9-dbbc9663eb93"});

            base.OnModelCreating(builder);
        }
    }
}
