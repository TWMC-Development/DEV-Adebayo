<%@ Master Language="C#" AutoEventWireup="true" Inherits="Rock.Web.UI.RockMasterPage" %>
<%@ Import Namespace="System.Web.Optimization" %>
<!DOCTYPE html>

 

<html >
<head runat="server">

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title></title>
     
    <!-- Included Script Files -->
 
    <script src="https://kit.fontawesome.com/43e21bc55b.js" crossorigin="anonymous"></script>
    
	<!-- Included CSS Files -->
 
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="../Styles/bs-5.css">

 
</head>

<body runat="server" id="body" class="content-body">

    <form id="form1" runat="server">
          
        <div class="header-preloader">
            <Rock:Zone Name="Preloader" runat="server" /> 
        </div>

        <div class="header-cta">
            <Rock:Zone Name="CTA" runat="server" /> 
        </div>

        <div class="header-nav">
            <Rock:Zone Name="Navbar" runat="server" /> 
        </div>
        
        <asp:ContentPlaceHolder ID="main" runat="server"></asp:ContentPlaceHolder>

	    <footer class="content-footer">
            <Rock:Zone Name="Footer" runat="server" />    
        </footer> 
        
 
    </form>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

</body>
</html>