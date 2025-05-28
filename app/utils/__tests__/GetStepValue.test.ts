import getStepValue from "../GetStepValue";

describe('getStepValue',() =>{
    test('up ',() => {
        const stepValue = getStepValue('up')
        expect(stepValue).toStrictEqual({ x: 0, y: 1 })
    })
    test('down ',() => {
        const stepValue = getStepValue('down')
        expect(stepValue).toStrictEqual({ x: 0, y: -1 })
    })
    test('downLeft ',() => {
        const stepValue = getStepValue('downLeft')
        expect(stepValue).toStrictEqual({ x: -1, y: -1 })
    })
})