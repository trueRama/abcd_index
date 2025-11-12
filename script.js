// Content Management System for Abcd Portal.live
class ContentManager {
    constructor() {
        this.contents = this.loadContents();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderContentList();
    }

    setupEventListeners() {
        // Form submission
        const form = document.getElementById('contentForm');
        form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Preview button
        const previewBtn = document.getElementById('previewBtn');
        previewBtn.addEventListener('click', () => this.showPreview());

        // Export button
        const exportBtn = document.getElementById('exportBtn');
        exportBtn.addEventListener('click', () => this.exportContents());

        // Clear all button
        const clearAllBtn = document.getElementById('clearAllBtn');
        clearAllBtn.addEventListener('click', () => this.clearAllContents());

        // Modal close
        const modal = document.getElementById('previewModal');
        const closeBtn = document.querySelector('.close');
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const content = {
            id: Date.now(),
            title: formData.get('title'),
            category: formData.get('category'),
            author: formData.get('author'),
            body: formData.get('body'),
            tags: formData.get('tags').split(',').map(tag => tag.trim()).filter(tag => tag),
            createdAt: new Date().toISOString()
        };

        this.contents.push(content);
        this.saveContents();
        this.renderContentList();
        
        // Reset form
        e.target.reset();
        
        // Show success message
        this.showNotification('Content created successfully!', 'success');
    }

    showPreview() {
        const title = document.getElementById('contentTitle').value;
        const category = document.getElementById('contentCategory').value;
        const author = document.getElementById('contentAuthor').value;
        const body = document.getElementById('contentBody').value;
        const tags = document.getElementById('contentTags').value;

        if (!title || !category || !author || !body) {
            this.showNotification('Please fill in all required fields to preview', 'error');
            return;
        }

        document.getElementById('previewTitle').textContent = title;
        document.getElementById('previewCategory').textContent = category.toUpperCase();
        document.getElementById('previewCategory').className = `badge ${category}`;
        document.getElementById('previewAuthor').textContent = `By ${author}`;
        document.getElementById('previewDate').textContent = new Date().toLocaleDateString();
        document.getElementById('previewBody').textContent = body;
        
        const tagsContainer = document.getElementById('previewTags');
        tagsContainer.innerHTML = '';
        if (tags) {
            tags.split(',').forEach(tag => {
                const trimmedTag = tag.trim();
                if (trimmedTag) {
                    const tagEl = document.createElement('span');
                    tagEl.className = 'tag';
                    tagEl.textContent = trimmedTag;
                    tagsContainer.appendChild(tagEl);
                }
            });
        }

        const modal = document.getElementById('previewModal');
        modal.style.display = 'block';
    }

    renderContentList() {
        const container = document.getElementById('contentItems');
        
        if (this.contents.length === 0) {
            container.innerHTML = '<p class="empty-state">No content created yet. Start by creating your first content above!</p>';
            return;
        }

        container.innerHTML = this.contents.map(content => this.createContentCard(content)).join('');
        
        // Add event listeners to item buttons
        this.contents.forEach(content => {
            const deleteBtn = document.getElementById(`delete-${content.id}`);
            if (deleteBtn) {
                deleteBtn.addEventListener('click', () => this.deleteContent(content.id));
            }
            
            const viewBtn = document.getElementById(`view-${content.id}`);
            if (viewBtn) {
                viewBtn.addEventListener('click', () => this.viewContent(content.id));
            }
        });
    }

    createContentCard(content) {
        const date = new Date(content.createdAt).toLocaleDateString();
        const tagsHtml = content.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        return `
            <div class="content-item">
                <h3>${content.title}</h3>
                <div class="content-meta">
                    <span class="badge ${content.category}">${content.category.toUpperCase()}</span>
                    <span>By ${content.author}</span> • 
                    <span>${date}</span>
                </div>
                <p>${content.body.substring(0, 150)}${content.body.length > 150 ? '...' : ''}</p>
                ${content.tags.length > 0 ? `<div class="tags">${tagsHtml}</div>` : ''}
                <div class="item-actions">
                    <button class="btn btn-secondary" id="view-${content.id}">View Full</button>
                    <button class="btn btn-danger" id="delete-${content.id}">Delete</button>
                </div>
            </div>
        `;
    }

    viewContent(id) {
        const content = this.contents.find(c => c.id === id);
        if (!content) return;

        document.getElementById('previewTitle').textContent = content.title;
        document.getElementById('previewCategory').textContent = content.category.toUpperCase();
        document.getElementById('previewCategory').className = `badge ${content.category}`;
        document.getElementById('previewAuthor').textContent = `By ${content.author}`;
        document.getElementById('previewDate').textContent = new Date(content.createdAt).toLocaleDateString();
        document.getElementById('previewBody').textContent = content.body;
        
        const tagsContainer = document.getElementById('previewTags');
        tagsContainer.innerHTML = content.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        const modal = document.getElementById('previewModal');
        modal.style.display = 'block';
    }

    deleteContent(id) {
        if (confirm('Are you sure you want to delete this content?')) {
            this.contents = this.contents.filter(c => c.id !== id);
            this.saveContents();
            this.renderContentList();
            this.showNotification('Content deleted successfully', 'success');
        }
    }

    clearAllContents() {
        if (confirm('Are you sure you want to delete all content? This action cannot be undone.')) {
            this.contents = [];
            this.saveContents();
            this.renderContentList();
            this.showNotification('All content cleared', 'success');
        }
    }

    exportContents() {
        if (this.contents.length === 0) {
            this.showNotification('No content to export', 'error');
            return;
        }

        const dataStr = JSON.stringify(this.contents, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `abcd-portal-content-${Date.now()}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        this.showNotification('Content exported successfully', 'success');
    }

    saveContents() {
        localStorage.setItem('abcd_portal_contents', JSON.stringify(this.contents));
    }

    loadContents() {
        const stored = localStorage.getItem('abcd_portal_contents');
        return stored ? JSON.parse(stored) : [];
    }

    showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            background: ${type === 'success' ? '#4caf50' : '#f44336'};
            color: white;
            border-radius: 6px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize the content manager when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ContentManager();
});
