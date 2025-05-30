import { ErrorBoundary } from 'react-error-boundary'
import Compo1 from '../components/Compo1'
import Compo2 from '../components/Compo2'
import Compo3 from '../components/Compo3'

const Test = () => {
    return <>
        <ErrorBoundary fallbackRender={() => <div>something went wrong</div>}>
            <Compo1 />
        </ErrorBoundary>

        <ErrorBoundary fallbackRender={() => <div>something went wrong</div>}>
            <Compo2 />
        </ErrorBoundary>

        <ErrorBoundary fallbackRender={() => <div>something went wrong</div>}>
            <Compo3 />
        </ErrorBoundary>
    </>
}

export default Test