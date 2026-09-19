// ==================== MENU ====================
function switchMenu(category) {
    document.querySelectorAll('.menu-view').forEach(view => {
        view.classList.add('is-hidden');
    });

    const selectedView = document.getElementById(`category-${category}`);
    if (selectedView) selectedView.classList.remove('is-hidden');

    document.querySelectorAll('.menu-tab').forEach(btn => {
        btn.classList.remove('is-active');
    });

    const activeBtn = document.getElementById(`tab-btn-${category}`);
    if (activeBtn) activeBtn.classList.add('is-active');
}

// ==================== MODAL ====================
function openDetailModal(name, price, description, imgSrc) {
    document.getElementById('modal-title').textContent = name;
    document.getElementById('modal-price').textContent = price;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-image').src = imgSrc;

    const whatsappMsg = encodeURIComponent(
        `Olá! Gostaria de pedir o *${name}* (${price}).`
    );

    document.getElementById('modal-whatsapp-cta').href =
        `https://wa.me/5511999999999?text=${whatsappMsg}`;

    document.getElementById('product-modal').classList.add('is-open');
    document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
    document.getElementById('product-modal').classList.remove('is-open');
    document.body.style.overflow = '';
}

const productModal = document.getElementById('product-modal');

productModal.addEventListener('click', event => {
    if (event.target === productModal) {
        closeDetailModal();
    }
});

document.addEventListener('keydown', event => {
    if (
        event.key === 'Escape' &&
        productModal.classList.contains('is-open')
    ) {
        closeDetailModal();
    }
});