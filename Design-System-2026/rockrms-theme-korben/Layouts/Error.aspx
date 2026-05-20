<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Error.aspx.cs" Inherits="RockWeb.Themes.Stark.Layouts.Error" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Rock - Error</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="<%= Page.ResolveUrl("~/Themes/Korben/Styles/theme.css") %>" />
    <link rel="stylesheet" href="<%= Page.ResolveUrl("~/Themes/Korben/Styles/rock-compat.css") %>" />

    <script src="<%# System.Web.Optimization.Scripts.Url("~/Scripts/Bundles/RockJQueryLatest" ) %>">
        $(document).ready(function () {
            $(".stack-trace").hide();

            //toggle the component with class msg_body
            $(".exception-type").on('click', function () {
                $(this).next(".stack-trace").slideToggle(500);
            });
        });
    </script>
</head>
<body id="splash" class="error">
    <form id="form1" runat="server">

        <div id="content">
            <div id="content-box">
                <div class="row">
                    <div class="col-md-12">
                        <div class="error-wrap">
                            <h1>That Wasn't Supposed To Happen...</h1>
                            <p><strong>An Error Occurred...</strong> The website administrators have
                            been notified of this problem.</p>

                            <p><a onclick="history.go(-1);" class="btn btn-sm btn-primary">Go Back</a></p>

                            <asp:Literal ID="lErrorInfo" runat="server"></asp:Literal>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </form>
</body>
</html>
