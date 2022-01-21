# Installation

## Pre-requisites 

### Power Apps component framework for canvas apps

To install the Icon Menu Builder you will need an Power Platform Environment configured to allow code components.

![Code Components](../assets/code-components.png)

### Install the Icon Menu Builder v2 Solution 

The solution is now a single package with everything required contained.

![Import Solutions](../assets/install-3.png)

Select or create the SharePoint connection
![Import Solutions](../assets/install-4.png)

![Import Solutions](../assets/install-5.png)


Select the SharePoint site URL Environment variable - Icon Menu Builder v2 SharePoint Site

![Import Solutions](../assets/install-8.png)

![Import Solutions](../assets/install-7.png)

## Run the SharePoint Setup Flowdd 
Open the solution and open the Icon Menu Builder - SharePoint Setup Flow

![SharePoint Setup](../assets/install-9-flow.png)

Turn on the __Flow__ and __Run__
![SharePoint Setup](../assets/install-10-flow.png)
![SharePoint Setup](../assets/install-11-flow.png)

![SharePoint Setup](../assets/install-12-flow.png)

Once the Flow completes your SharePoint site will have the 3 supporting lists.

* My Favourites
* My Menus
* My Menu Items

![SharePoint Setup](../assets/install-13-flow.png)

## Configure List Environment Variables

Configure the list environment variables by navigating to __Solutions__ and open the __Default Solution__

![Configure List Environment Variables](../assets/install-14-list-environment-variables.png)
Select the lists that were just created for the 3 lists.
![Configure List Environment Variables](../assets/install-15-list-environment-variables.png)
![Configure List Environment Variables](../assets/install-16-list-environment-variables.png)

## Run the Canvas App

Navigate to __Apps__ right click on the Icon Menu Builder app and select details, copy the app url to a new browser tab and add ```&hideNavBar=true```, once opened in Edge I recommend you save it as an app and pin it to your taskbar.

![Open App](../assets/app-config-2.png)

Congratulations you have installed the Icon Menu Builder, I hope you find it useful.

![Home Screen](../assets/home-screen.png)

!!! warning "Known Issue"
    If the menu doesn't appear when first loading, click on the __Home Icon__ or the __Refresh Icon__