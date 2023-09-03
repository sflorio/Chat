using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using Chat.Api.Models;
using System.Xml.Linq;
using JetBrains.Profiler.Api;
using Microsoft.AspNet.SignalR.Infrastructure;
using System.Diagnostics;

namespace Chat.Api.Hubs
{
    public class ChatHub : Hub
    {
        //PerformanceCounter cpuCounter;
        //PerformanceCounter ramCounter;
        public override Task OnConnectedAsync()
        {
            //MeasureProfiler.StartCollectingData();
            //MemoryProfiler.GetSnapshot("Connection initiated");
            return Task.CompletedTask;
        }

        public override Task OnDisconnectedAsync(Exception? exception)
        {            
            //MeasureProfiler.SaveData();
            //MemoryProfiler.GetSnapshot("Connection ended");

            return Task.CompletedTask;
        }


        public async Task Send(ChatMessage message)
        {
            // Call the broadcastMessage method to update clients.
            await Clients.Others.SendAsync("broadcastMessage", message);
        }
    }
}