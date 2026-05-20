<%@ Page Language="C#" AutoEventWireup="true" Inherits="Rock.Web.UI.DialogPage" %>
<%@ Import Namespace="System.Web.Optimization" %>
<%@ Import Namespace="Rock" %>

<!DOCTYPE html>

<script runat="server">

    /// <summary>
    /// An optional subtitle
    /// </summary>
    public override string SubTitle
    {
        get
        {
            return lSubTitle.Text.TrimStart( "<small>".ToCharArray() ).TrimEnd( "</small>".ToCharArray() );
        }
        set
        {
            lSubTitle.Text = string.IsNullOrWhiteSpace( value ) ? "" : "<small>" + value + "</small>";
        }
    }

    /// <summary>
    /// Gets or sets the close message.
    /// </summary>
    public override string CloseMessage
    {
        get
        {
            return hfCloseMessage.Value;
        }
        set
        {
            hfCloseMessage.Value = value;
        }
    }

    /// <summary>
    /// Handles the Click event of the btnSave control.
    /// </summary>
    protected void btnSave_Click( object sender, EventArgs e )
    {
        base.FireSave( sender, e );
    }

    /// <summary>
    /// Raises the <see cref="E:System.Web.UI.Control.Init" /> event.
    /// </summary>
    protected override void OnInit( EventArgs e )
    {
        base.OnInit( e );

        lTitle.Text = Request.QueryString["t"] ?? "Title";

        btnSave.Text = Request.QueryString["pb"] ?? "Save";
        btnSave.Visible = btnSave.Text.Trim() != string.Empty;

        btnCancel.Text = Request.QueryString["sb"] ?? "Cancel";
        btnCancel.Visible = btnCancel.Text.Trim() != string.Empty;
        if ( !btnSave.Visible )
        {
            btnCancel.AddCssClass( "btn-primary" );
        }
    }

</script>

<html>
<head runat="server">
    <title></title>

    <script src="<%# System.Web.Optimization.Scripts.Url("~/Scripts/Bundles/RockJQueryLatest" ) %>"></script>

    <!-- Bootstrap 5.3 + Theme + Rock Compat for dialog modals -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="<%# ResolveRockUrl("~~/Styles/theme.css", true) %>" />
    <link rel="stylesheet" href="<%# ResolveRockUrl("~~/Styles/rock-compat.css", true) %>" />

    <style>
        html, body {
            height: auto;
            width: 100%;
            min-width: 100%;
            margin: 0;
            padding: 0;
            vertical-align: top;
        }
    </style>

</head>

<body id="dialog" class="rock-modal">
    <form id="form1" runat="server">
        <asp:ScriptManager ID="sManager" runat="server" />
        <asp:UpdatePanel ID="updatePanelDialog" runat="server">
            <ContentTemplate>
                <div class="modal-content">
                    <Rock:HiddenFieldWithClass ID="hfCloseMessage" runat="server" CssClass="modal-close-message" />
                    <div class="modal-header">
                        <h3 class="modal-title">
                            <asp:Literal ID="lTitle" runat="server"></asp:Literal></h3>
                        <asp:Literal ID="lSubTitle" runat="server"></asp:Literal>
                        <a id="closeLink" href="#" class="close btn-close" onclick="window.parent.Rock.controls.modal.close($(this).closest('.modal-content').find('.modal-close-message').first().val());" aria-label="Close"></a>
                    </div>

                    <div class="modal-body">

                        <!-- Ajax Error -->
                        <div class="alert alert-danger ajax-error no-index" style="display:none">
                            <p><strong>Error</strong></p>
                            <span class="ajax-error-message"></span>
                        </div>

                        <Rock:Zone Name="Main" runat="server" />

                    </div>

                    <div class="modal-footer">
                        <asp:LinkButton ID="btnCancel" runat="server" Text="Cancel" CssClass="btn btn-link" OnClientClick="window.parent.Rock.controls.modal.close($(this).closest('.modal-content').find('.modal-close-message').first().val());" CausesValidation="false" />
                        <asp:LinkButton ID="btnSave" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnSave_Click " />
                    </div>
                </div>
            </ContentTemplate>
        </asp:UpdatePanel>
    </form>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
<script>
    Sys.Application.add_load(function () {
        new ResizeSensor($('#dialog'), function ()
        {
            $('#modal-popup iframe', window.parent.document).height($('#dialog').height());
        });
    });
</script>
