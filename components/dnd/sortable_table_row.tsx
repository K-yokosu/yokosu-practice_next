import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { UniqueIdentifier } from "@dnd-kit/core";
import { TableRow } from "@/components/ui/table";

type SortableProps = {
  children: React.ReactNode;
  id: UniqueIdentifier;
  css: string;
};
export function SortAbleTableRow({ children, id, css }: SortableProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: id // idでないといけない
  });

  const style = {
    transform: CSS.Transform.toString(transform)
    // transition,
    // backgroundColor: isDragging ? 'green' : undefined,
  };

  return (
    <TableRow className={css} ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </TableRow>
  );
}
