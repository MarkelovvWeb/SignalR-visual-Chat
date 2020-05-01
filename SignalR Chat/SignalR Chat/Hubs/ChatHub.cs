using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace SignalR_Chat.Hubs
{
    public class ChatHub : Hub
    {
        /// <summary>
        /// Hub for send message
        /// </summary>
        /// <param name="user">user</param>
        /// <param name="message">message</param>
        /// <returns></returns>
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}
