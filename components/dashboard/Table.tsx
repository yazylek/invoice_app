import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    date: "2025-02-22",
    sender: "DEF Services",
    totalAmount: "$250.00",
    status: "Verification",
    linkedInvoice: "#INV-2025-02",
  },
  {
    date: "2025-02-21",
    sender: "ABC Ltd.",
    totalAmount: "$150.00",
    status: "No Match",
    linkedInvoice: "-",
  },
  {
    date: "2025-02-20",
    sender: "XYZ Corp.",
    totalAmount: "$350.00",
    status: "Matched",
    linkedInvoice: "#INV-2025-01",
  },
];

export function TableDashboard() {
  return (
    <Table className="mb-12">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Date</TableHead>
          <TableHead>Sender</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Linked Invoice</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.date}>
            <TableCell className="font-medium">{invoice.date}</TableCell>
            <TableCell>{invoice.sender}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.linkedInvoice}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
