<%@ Page Language="C#" MasterPageFile="Site.Master" AutoEventWireup="true" Inherits="Rock.Web.UI.RockPage" %>

<asp:Content ID="ctMain" ContentPlaceHolderID="main" runat="server">

    <div class="alert alert-danger ajax-error no-index" style="display:none">
        <p><strong>Error</strong></p>
        <span class="ajax-error-message"></span>
    </div>

    <!-- Page Hero Zone (for page-specific hero banners) -->
    <Rock:Zone Name="Hero" runat="server" />

    <!-- Primary Content -->
    <section class="page-content">
        <div class="container">
            <Rock:Zone Name="Content" runat="server" />
        </div>
    </section>

    <!-- Full-Width Feature Section (no container — block controls its own width) -->
    <Rock:Zone Name="Feature" runat="server" />

    <!-- Secondary Content -->
    <section class="page-content-secondary">
        <div class="container">
            <Rock:Zone Name="Secondary" runat="server" />
        </div>
    </section>

</asp:Content>
