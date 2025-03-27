import { ArrowLeftRight, BookText, Workflow } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const QuickStats = () => {
  return (
    <div>
      <Card>
        <CardHeader className="text-xl font-bold">Quick Stats</CardHeader>
        <CardContent className="grid grid-cols-3 gap-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-bold flex justify-between gap-2">
                Total Invoices:
                <BookText size={24} />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="font-bold text-2xl text-primary">81</span>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-bold flex justify-between gap-2">
                Pending transactions:
                <Workflow size={24} />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="font-bold text-2xl text-primary">4</span>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-bold flex justify-between gap-2">
                Integrations:
                <ArrowLeftRight size={24} />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="font-bold text-2xl text-primary">
                Connected to 3 banks
              </span>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};
export default QuickStats;
