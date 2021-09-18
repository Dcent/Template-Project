using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;


namespace FoodPlanner.web.site.API_Controller
{
[ApiExplorerSettings(IgnoreApi = true)]
public class BaseApiController : ControllerBase
{
        public ILogger Logger { get; set; }
}
}
