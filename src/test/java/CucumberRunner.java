import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/java/Features", glue="stepDefinitions",
        tags="@Sanity,@smoke,@regression",dryRun = false,
        plugin ={"pretty","html:target/cucumber","junit:target/cucumber.xml","json:target/cucumber.json"}
)
public class CucumberRunner {


}
