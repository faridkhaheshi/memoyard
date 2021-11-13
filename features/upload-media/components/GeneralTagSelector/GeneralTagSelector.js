import MediaTagSelector from "../../../../components/MediaCard/MediaTagSelector"

const GeneralTagSelector = ({ tags }) => (
  <section>
    <MediaTagSelector
      title="Send all items to:"
      selectedTags={[]}
      tags={tags}
      onToggle={e => console.log(e)}
    />
  </section>
)

export default GeneralTagSelector
