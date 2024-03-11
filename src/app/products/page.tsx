import ProductsList from "@/components/organisms/ProductsList";
import styles from "./page.module.scss";
import { getProducts } from "@/apis/services/product";
import PaginationBar from "@/components/molecules/PaginationBar";
import Paper from "@/components/templates/Paper";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    [key: string]: string | string[] | undefined
  };
}) {
  const page = searchParams?.page ? Number(searchParams?.page) : 1
  const skip = page - 1
  const productsData = await getProducts({ skip })

  return (
    <main>
      <section className={styles.container}>
        <ProductsList products={productsData.products} />
      </section>

      <Paper topSpacing="3x" bottomSpacing="3x" isCentered>
        <PaginationBar
          totalCount={productsData.total}
        />
      </Paper>
    </main>
  );
}