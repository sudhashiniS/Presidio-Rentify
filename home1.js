document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        const userType = user.userType;
        console.log('User Type:', userType);  // Debug information

        if (userType === 'seller') {
            document.getElementById('sellerButton').style.display = 'block';
            document.getElementById('buyerButton').style.display = 'none';
        } else {
            document.getElementById('buyerButton').style.display = 'block';
            document.getElementById('sellerButton').style.display = 'none';
        }
    } else {
        console.log('No user found in localStorage');  // Debug information
    }
});

function goToPage(page) {
    window.location.href = page;
}
