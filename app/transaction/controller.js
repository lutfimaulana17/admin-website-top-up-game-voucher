const Transaction = require('./model')

module.exports={
    index: async (req, res) => {
        try {
            const alertMessage = req.flash('alertMessage')
            const alertStatus = req.flash('alertStatus')

            const alert = { message: alertMessage, status: alertStatus }
            let transaction = await Transaction.find()
            
            res.render('admin/transaction/view_transaction', {
                transaction,
                alert,
                name: req.session.user.name,
                title: "Halaman jenis pembayaran"
            })
        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/transaction')
        }
    }
}