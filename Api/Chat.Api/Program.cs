using Microsoft.AspNetCore.SignalR;
using Chat.Api.Hubs;


var myCorsPolicy= "AllowAllCorsPolicy";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorPages();
builder.Services.AddSignalR();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: myCorsPolicy,
                      policy =>
                      {
                          policy.WithOrigins("http://192.168.16.1:3000/",
                                              "https://localhost:3000/", "https://localhost:3000/");
                      });
});


var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseCors(myCorsPolicy);

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();



app.MapHub<ChatHub>("/chatHub");

app.Run();
