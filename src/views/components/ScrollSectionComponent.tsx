/** @format */

import { forwardRef, useRef } from 'react';
import { useInView } from '../../hooks/VisibilityHooks';
import { MergeRefs } from '../../Utility';

const ScrollSectionComponent = forwardRef((props: any, ref: any) => {
	const sectionRef = useRef(null);
	const onScreen = useInView(sectionRef);

	return (
		<section
			style={props.style}
			className={onScreen ? 'scroll-section active' : 'scroll-section'}
			id={props.id}
			ref={MergeRefs([sectionRef, ref])}
		>
			<div className="content">{props.children}</div>
		</section>
	);
});

export default ScrollSectionComponent;
