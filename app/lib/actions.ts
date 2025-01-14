'use server'

export async function createInvoice(formData: FormData) {
    const rawFormData = {
        customerId: formData.get('customerId'),
        ammount: formData.get('amount'),
        stauts: formData.get('status')
    }
    // This is a test for raw form data
    console.log(rawFormData)
}