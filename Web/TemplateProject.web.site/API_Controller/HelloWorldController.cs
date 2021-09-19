using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace TemplateProject.web.site.API_Controller
{
    
    [ApiController]
    [Route("api/hello/[action]")]
    public class HelloWorldController : BaseApiController
    {

        [HttpGet]
        public IEnumerable<string> World()
        {
            var list = new List<string>();
            list.Add("Hello world");
            IEnumerable<string> response = list;
            return response;

        }

        [HttpGet]
        public IEnumerable<string> Space()
        {
            var list = new List<string>();
            list.Add("Hello from outer space");
            IEnumerable<string> response = list;
            return response;

        }
    }
}
