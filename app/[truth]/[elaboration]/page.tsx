export default function Elaboration({
	params,
}: {
	params: { elaboration: string }
}) {
	return <article className="">Elaborating on: {params.elaboration}</article>
}
