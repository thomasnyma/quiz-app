using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace quiz_backend_test.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class QuestionsController : ControllerBase
    {
        [HttpPost]
        public void Post([FromBody]string value)
        {

        }
    }
}
