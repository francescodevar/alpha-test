document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
    const item = question.closest('.faq-item');
    item.classList.toggle('active');
    const answer = item.querySelector('.faq-answer');
    if (item.classList.contains('active')) {
    answer.style.maxHeight = answer.scrollHeight + 'px' ;
    } else {
    answer.style.maxHeight = '0';
    }
    });
    });