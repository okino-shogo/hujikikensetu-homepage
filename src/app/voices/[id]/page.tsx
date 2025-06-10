import { notFound } from "next/navigation";
import { employees } from "../data";
import EmployeeClientPage from "./EmployeeClientPage";

type Props = {
  params: { id: string };
};

export function generateStaticParams() {
  return employees.map((employee) => ({
    id: employee.id,
  }));
}

export default function EmployeeDetailPage({ params }: any) {
  const employee = employees.find(emp => emp.id === params.id);

  if (!employee) {
    notFound();
  }

  return <EmployeeClientPage employee={employee} />;
} 