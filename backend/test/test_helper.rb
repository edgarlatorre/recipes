ENV["RAILS_ENV"] ||= "test"
require_relative "../config/environment"
require "rails/test_help"

Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :minitest

    # Keep as many of these lines as are necessary:
    with.library :active_record
    with.library :active_model
  end
end

class ActiveSupport::TestCase
  # Run tests in parallel with specified workers
  parallelize(workers: :number_of_processors)

  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...
end
