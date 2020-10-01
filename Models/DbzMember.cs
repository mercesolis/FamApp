using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace capstone.Models
{
    public class DbzMember
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Attack { get; set; }
        public string Defense { get; set;}
        public string Notes { get; set;}
        public string UserId { get; set;}
        public ApplicationUser User { get; set;}



    }
}
