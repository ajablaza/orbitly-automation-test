export function supportForm() {
    return `
    <div class="support-container">
        <div class="support-header">
          <h1 class="gradient-text support-title">Support Center</h1>
          <p class="support-subtitle text-muted-foreground">
            Need help? Submit a support request and our team will get back to you.
          </p>
        </div>
        <form class="support-form card-shadow">
            <div class="form-section">
                <h2 class="form-section-title">Customer Information</h2>
                <div class="form-group">
                  <label for="fullName">Full Name</label>
                  <input type="text" id="fullName" placeholder="John Doe" required>
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" placeholder="john@company.com" required>
                </div>
                <div class="form-group">
                  <label for="companyName">Company Name</label>
                  <input type="text" id="companyName" placeholder="Acme Corp">
                </div>
                <div class="form-group">
                    <label for="planType">Plan Type</label>
                    <select id="planType" required>
                        <option value="">Select a plan</option> 
                        <option value="Free">Free</option>
                        <option value="Starter">Starter</option>
                        <option value="Pro">Pro</option>
                        <option value="Enterprise">Enterprise</option>
                    </select>
                </div>
            </div>
            <div class="form-section">
                <h2 class="form-section-title">Issue Details</h2>
                <div class="form-group">
                    <label for="concernType">Type of Concern</label>
                    <select id="concernType" required>
                        <option value="">Select concern type</option>
                        <option value="Billing Issue">Billing Issue</option>
                        <option value="Login / Account Access">Login / Account Access</option>
                        <option value="Bug Report">Bug Report</option>
                        <option value="Feature Request">Feature Request</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="urgency">Urgency Level</label>
                    <select id="urgency" required>
                        <option value="">Select urgency</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea id="description" rows="5" placeholder="Please describe your issue in detail..." required></textarea>
                </div>
                <div class="form-group checkbox-group">
                    <input type="checkbox" id="impactingLive">
                    <label for="impactingLive">This issue is impacting live campaigns.</label>
                </div>
                <button type="submit" class="submit-btn gradient-bg text-primary-foreground">
                    Submit Support Request
                </button>   
            </div>
        </form>
        <div class="mock-warning">
            <p class="text-muted-foreground">
                ⚠️ This form is part of a mock automation workflow experiment.
            </p>
        </div>
    </div>
    `;
}