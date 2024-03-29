﻿using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using Chat.Api.Models;

namespace Chat.Api.Hubs
{
    public class DataSetHub : Hub
    {
        public async Task Send(ChatMessage message)
        {
            // Call the broadcastMessage method to update clients.
            await Clients.All.SendAsync("broadcastDataset", message);
        }
    }
}