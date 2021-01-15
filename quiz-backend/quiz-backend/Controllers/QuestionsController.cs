using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace quiz_backend.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class QuestionsController : ControllerBase
    {
        readonly QuizContext context;
        public QuestionsController(QuizContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Models.Question>> Get()
        {
            return new Models.Question[] {
                new Models.Question() { Text = "hello"},
                new Models.Question() { Text = "hi"},
            };
        }

        [HttpPost]
        public void Post([FromBody] Models.Question question)
        {
            context.Questions.Add(question);
            context.SaveChanges();
        }
    }
}
