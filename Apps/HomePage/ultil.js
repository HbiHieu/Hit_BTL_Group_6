export const getStartList = ( ratting ) => {
    const handleStar = (index) => {
        if (ratting >= index) {
            return `<i class="fa-solid fa-star"></i>`;
        } else if (index - ratting > 0 && index - ratting < 1) {
            return `<i class="fa-solid fa-star-half-stroke"></i>`;
        } else {
            return `<i class="fa-regular fa-star"></i>`;
        }
    };
    return [...Array(5)].map((item, index) => handleStar(index + 1)).join('');
}