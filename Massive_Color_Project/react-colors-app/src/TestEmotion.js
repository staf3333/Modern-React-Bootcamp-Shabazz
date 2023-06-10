/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const testCss = {
    text: css({
        color: "red"
    })
}
const TestEmotion = () => {
    return <p css={testCss.text}>I AM ANGRY</p>
}

export default TestEmotion;