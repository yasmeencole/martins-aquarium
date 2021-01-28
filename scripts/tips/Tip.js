/**
 *  Tip which renders individual tip objects as HTML
 */
export const Tip = (tip) => {
    return `
            <aside class="containerRight">
                <ul>
                    <li>${tip.text}</li>
                    <li>${tip.text}</li>
                    <li>${tip.text}</li>
                    <li>${tip.text}</li>
                    <li>${tip.text}</li>
                </ul>
            </aside>    
    `
}