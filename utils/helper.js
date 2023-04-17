export const getDiscountedPricePercentage = (originalPrice, discountedPrice) => {
    const discount = originalPrice - discountedPrice

    const discountedPercent = (discount / originalPrice) * 100

    return discountedPercent.toFixed(2)
}