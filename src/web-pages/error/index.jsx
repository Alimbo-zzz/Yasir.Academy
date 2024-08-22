import { createRoot } from 'react-dom/client';
import Wrapper from '@layouts/Wrapper';
import Error from '@pages/Error';

const root = createRoot( document.getElementById('root') );

root.render(<>
	<Wrapper>
		<Error/>
	</Wrapper>
</>);
