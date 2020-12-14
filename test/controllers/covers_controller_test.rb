require "test_helper"

class CoversControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get covers_index_url
    assert_response :success
  end
end
