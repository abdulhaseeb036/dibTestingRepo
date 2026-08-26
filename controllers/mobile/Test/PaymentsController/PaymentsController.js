define({

    onBackClick: function() {
        kony.application.popForm();
    },

    onTransferMoneyClick: function() {
        var transferMoneyForm = frmTransferMoney;
        transferMoneyForm.show();
    },

    onBillPaymentClick: function() {
        var billPaymentForm = frmBillPayment;
        billPaymentForm.show();
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
