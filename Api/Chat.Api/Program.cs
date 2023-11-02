using Chat.Api.Hubs;
using Microsoft.AspNetCore.Authentication.Certificate;

var myCorsPolicy= "AllowAllCorsPolicy";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSignalR();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: myCorsPolicy,
                      policy =>
                      {
                          policy
                          .WithOrigins("https://localhost:3000", "https://172.25.240.1:3000")
                           .AllowAnyHeader()
                           .AllowAnyMethod()
                           .AllowCredentials();
                      });
});



var app = builder.Build();

app.UseRouting();

app.UseCors(myCorsPolicy);


app.UseEndpoints(routes =>
{
    routes.MapHub<ChatHub>("/chatHub");
});

app.Run();
