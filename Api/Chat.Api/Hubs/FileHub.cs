using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using Chat.Api.Models;

namespace Chat.Api.Hubs
{
    public class FileHub : Hub
    {
        public async Task Download()
        {   
            Stream file = File.OpenRead("TestFile/Ethereum.pdf");
            // Call the broadcastMessage method to update clients.
            await Clients.All.SendAsync("broadcastFile", file);
        }
    }
}