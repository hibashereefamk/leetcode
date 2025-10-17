class Calculator {
    /** 
     * @param {number} value - initial value
     */
    constructor(value) {
        this.value = value; // store current result
    }

    /** 
     * @param {number} num
     * @return {Calculator}
     */
    add(num) {
        this.value += num;
        return this; // allow chaining
    }

    /** 
     * @param {number} num
     * @return {Calculator}
     */
    subtract(num) {
        this.value -= num;
        return this;
    }

    /** 
     * @param {number} num
     * @return {Calculator}
     */
    multiply(num) {
        this.value *= num;
        return this;
    }

    /** 
     * @param {number} num
     * @return {Calculator}
     */
    divide(num) {
        if (num === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.value /= num;
        return this;
    }

    /** 
     * @param {number} num
     * @return {Calculator}
     */
    power(num) {
        this.value = this.value ** num;
        return this;
    }

    /** 
     * @return {number}
     */
    getResult() {
        return this.value;
    }
}
