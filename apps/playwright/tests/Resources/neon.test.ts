import { test } from "@playwright/test"

test.describe("Neon create And delete", () => {
  test.beforeEach("Show create Modal", async ({ page }) => {
    await page.goto(`/${process.env.FLOWAGENT_CLOUD_TEAM_IDENTITY}/dashboard/apps`)
    await page.getByText("Resources").click()
    await page.getByRole("button", { name: "Create New" }).click()
  })

  test("create Resource", async ({ page }) => {
    await page.getByText("NeonIconNeon").click()
    await page
      .getByPlaceholder('i.e."Users DB(readonly)" or "Internal Admin API"')
      .click()
    await page
      .getByPlaceholder('i.e."Users DB(readonly)" or "Internal Admin API"')
      .fill("test")
    await page.getByPlaceholder("Hostname").click()
    await page.getByPlaceholder("Hostname").fill(process.env.FLOWAGENT_NEON_HOST)
    await page.getByPlaceholder("acme_production").click()
    await page
      .getByPlaceholder("acme_production")
      .fill(process.env.FLOWAGENT_NEON_DATABASENAME)
    await page.getByPlaceholder("Username").click()
    await page
      .getByPlaceholder("Username")
      .fill(process.env.FLOWAGENT_NEON_DATABASEUSERNAME)
    await page.getByPlaceholder("Password").click()
    await page
      .getByPlaceholder("Password")
      .fill(process.env.FLOWAGENT_NEON_DATABASEPASSWORD)
    await page
      .locator("div")
      .filter({ hasText: /^\*Hostname\/PortUpIconDownIcon$/ })
      .getByRole("textbox")
      .nth(1)
      .fill("5432")
    await page.getByRole("button", { name: "Test Connection" }).click()
    await page.getByText("SuccessCircleIconTest successfully").click()
    await page.getByRole("button", { name: "Save Resource" }).click()
    await page.getByText("SuccessCircleIconSave successfully").click()
    await page.getByText("SuccessCircleIconSave successfully").click()
  })

  test.afterEach("Close Modal", async ({ page }) => {
    await page.getByRole("button", { name: "MoreIcon" }).first().click()
    await page.getByText("Delete").click()
    await page.getByRole("button", { name: "Delete" }).click()
    await page.getByText("SuccessCircleIconDeleted successfully").click()
  })
})
