using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using Chat.Api.Models;
using System.Xml.Linq;
using JetBrains.Profiler.Api;
using Microsoft.AspNet.SignalR.Infrastructure;
using System.Collections;
using System.Collections.Specialized;
using System.Diagnostics;


namespace Chat.Api.Hubs
{
    public class ChatHub : Hub
    {
        //PerformanceCounter cpuCounter;
        //PerformanceCounter ramCounter;
        //public ChatHub()
        //{
        //    cpuCounter = new PerformanceCounter("Processor", "% Processor Time", "_Total");
        //    ramCounter = new PerformanceCounter("Memory", "Available MBytes");
        //}
        //Process currenProcess;

        //public override Task OnConnectedAsync()
        //{
        //    //MeasureProfiler.StartCollectingData();

        //    //GetPrivateBytesMeasure("At start");
        //    //GetProcessorTimeMeasure("At start");
        //    //cpuCounter = new PerformanceCounter("Processor", "% Processor Time", "_Total");
        //    //cpuCounter.NextValue();
        //    //var a = System.Diagnostics.Process.GetCurrentProcess();
        //    //Console.WriteLine("Cpu Value at start:" + a.TotalProcessorTime.ToString());
        //    //ramCounter.NextValue();
        //    //Console.WriteLine("Cpu Value at start:" + cpuCounter.NextValue().ToString());
        //    //Console.WriteLine("ram Value at start:" + ramCounter.NextValue().ToString());
        //    //MeasureProfiler.StartCollectingData();
        //    //MemoryProfiler.GetSnapshot("Connection initiated");
        //    return Task.CompletedTask;
        //}


        //private void GetPrivateBytesMeasure(string message) {
        //    var currentProcess = Process.GetCurrentProcess().ProcessName;
        //    PerformanceCounter privateBytes =
        //        new PerformanceCounter(categoryName: "Process", counterName: "Private Bytes", instanceName: currentProcess);

        //    Console.WriteLine($"private bytes {message} = " + privateBytes.NextValue());
        //}

        //private void GetProcessorTimeMeasure(string message)
        //{
        //    var currentProcess = Process.GetCurrentProcess().ProcessName;
        //    PerformanceCounter privateBytes =
        //        new PerformanceCounter("Processor", "% Processor Time", "_Total");

        //    Console.WriteLine($"% Processor Time {message} = " + privateBytes.NextValue());
        //    Console.WriteLine($"% Processor Time {message} = " + privateBytes.NextValue());
        //}   

        //public override Task OnDisconnectedAsync(Exception? exception)
        //{
        //    //GetPrivateBytesMeasure("At end");
        //    //GetProcessorTimeMeasure("At end");

        //    //var a = System.Diagnostics.Process.GetCurrentProcess();
        //    //Console.WriteLine("Cpu Value at end:" + a.TotalProcessorTime.ToString());
        //    //cpuCounter.NextValue();
        //    //ramCounter.NextValue();
        //    ////MeasureProfiler.SaveData();
        //    ////MemoryProfiler.GetSnapshot("Connection ended");
        //    //Console.WriteLine("Cpu Value at end:" + cpuCounter.NextValue().ToString());
        //    //Console.WriteLine("ram Value at end:" + ramCounter.NextValue().ToString());


        //    //MeasureProfiler.StopCollectingData();
            
        //    return Task.CompletedTask;
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    MeasureProfiler.SaveData();
        //}


        public async Task Send(ChatMessage message)
        {
            // Call the broadcastMessage method to update clients.
            await Clients.Others.SendAsync("broadcastMessage", message);
        }
    }
}