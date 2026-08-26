define({

    onBackClick: function() {
        kony.application.popForm();
    },

    onConfirmClick: function() {
        kony.application.popForm();
    },

    onTabOverviewClick: function() {
        var overviewForm = frmOverview;
        overviewForm.show();
    },

    onTabAccountsClick: function() {
        var accountsForm = frmAccounts;
        accountsForm.show();
    },

    onTabPaymentClick: function() {
        var paymentForm = frmPayment;
        paymentForm.show();
    },

    onTabMoreClick: function() {
        var moreForm = frmMore;
        moreForm.show();
    }

});
