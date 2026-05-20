<%@ Page Language="C#" MasterPageFile="Site.Master" AutoEventWireup="true" Inherits="Rock.Web.UI.RockPage" %>

<asp:Content ID="ctMain" ContentPlaceHolderID="main" runat="server">

    <div class="alert alert-danger ajax-error no-index" style="display:none">
        <p><strong>Error</strong></p>
        <span class="ajax-error-message"></span>
    </div>

    <!-- Page Hero -->
    <Rock:Zone Name="Hero" runat="server" />

    <!-- Full-Width Feature -->
    <Rock:Zone Name="Feature" runat="server" />

    <!-- Two-Column: Main Content + Sidebar Right -->
    <section class="page-content">
        <div class="container">
            <div class="row">
                <div class="col-lg-9">
                    <Rock:Zone Name="Section A" runat="server" />
                </div>
                <div class="col-lg-3">
                    <aside class="content-sidebar">
                        <Rock:Zone Name="Sidebar Right" runat="server" />
                    </aside>
                </div>
            </div>
        </div>
    </section>

</asp:Content>
