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

            //Utils ut = new Utils();
            //ut.FileName = "hs-2004-15-b-full_tif.bmp"; // hard coded for demo
            //ut.TempFolder = Path.Combine(CurrentFolder, "Temp");
            //ut.MaxFileSizeMB = 1;
            //ut.SplitFile();



            // Call the broadcastMessage method to update clients.
            await Clients.All.SendAsync("broadcastFile", file);
        }


        //public bool UploadFile(string FileName)
        //{
        //    bool rslt = false;
        //    using (var client = new HttpClient())
        //    {
        //        using (var content = new MultipartFormDataContent())
        //        {
        //            var fileContent = new ByteArrayContent(System.IO.File.ReadAllBytes(FileName));
        //            fileContent.Headers.ContentDisposition = new
        //                ContentDispositionHeaderValue("attachment")
        //            {
        //                FileName = Path.GetFileName(FileName)
        //            };
        //            content.Add(fileContent);

        //            var requestUri = "http://localhost:8170/Home/UploadFile/";
        //            try
        //            {
        //                var result = client.PostAsync(requestUri, content).Result;
        //                rslt = true;
        //            }
        //            catch (Exception ex)
        //            {
        //                // log error
        //                rslt = false;
        //            }
        //        }
        //    }
        //    return rslt;
        //}

    }
}