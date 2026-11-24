import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

import { AuthAuthTokenPostRequest } from '../models/AuthAuthTokenPostRequest';
import { DocumentsArchivePostRequest } from '../models/DocumentsArchivePostRequest';
import { DocumentsDeleteDeleteRequest } from '../models/DocumentsDeleteDeleteRequest';
import { DocumentsMovePostRequest } from '../models/DocumentsMovePostRequest';
import { DocumentsRestorePostRequest } from '../models/DocumentsRestorePostRequest';
import { DocumentsUpdatePutRequest } from '../models/DocumentsUpdatePutRequest';
import { FoldersCreatePostRequest } from '../models/FoldersCreatePostRequest';
import { FoldersDeleteDeleteRequest } from '../models/FoldersDeleteDeleteRequest';
import { FoldersUpdatePutRequest } from '../models/FoldersUpdatePutRequest';
import { TeamsCreatePostRequest } from '../models/TeamsCreatePostRequest';
import { TeamsDeleteDeleteRequest } from '../models/TeamsDeleteDeleteRequest';
import { TeamsMembersAddPostRequest } from '../models/TeamsMembersAddPostRequest';
import { TeamsUpdatePutRequest } from '../models/TeamsUpdatePutRequest';
import { WorkspacesCreatePostRequest } from '../models/WorkspacesCreatePostRequest';
import { WorkspacesDeleteDeleteRequest } from '../models/WorkspacesDeleteDeleteRequest';
import { WorkspacesUpdatePutRequest } from '../models/WorkspacesUpdatePutRequest';
import { ObservableAuthenticationApi } from './ObservableAPI';

import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";
export class PromiseAuthenticationApi {
    private api: ObservableAuthenticationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationApiRequestFactory,
        responseProcessor?: AuthenticationApiResponseProcessor
    ) {
        this.api = new ObservableAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * API KEY Authentification
     * @param auth_auth_token_post_request
     */
    public authenticateWithHttpInfo(auth_auth_token_post_request: AuthAuthTokenPostRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authenticateWithHttpInfo(auth_auth_token_post_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * API KEY Authentification
     * @param auth_auth_token_post_request
     */
    public authenticate(auth_auth_token_post_request: AuthAuthTokenPostRequest, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authenticate(auth_auth_token_post_request, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDocumentsApi } from './ObservableAPI';

import { DocumentsApiRequestFactory, DocumentsApiResponseProcessor} from "../apis/DocumentsApi";
export class PromiseDocumentsApi {
    private api: ObservableDocumentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DocumentsApiRequestFactory,
        responseProcessor?: DocumentsApiResponseProcessor
    ) {
        this.api = new ObservableDocumentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * Archive Document
     * @param documents_archive_post_request
     */
    public archiveWithHttpInfo(documents_archive_post_request: DocumentsArchivePostRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.archiveWithHttpInfo(documents_archive_post_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Archive Document
     * @param documents_archive_post_request
     */
    public archive(documents_archive_post_request: DocumentsArchivePostRequest, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.archive(documents_archive_post_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Delete Document
     * @param documents_delete_delete_request
     */
    public deleteWithHttpInfo(documents_delete_delete_request: DocumentsDeleteDeleteRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteWithHttpInfo(documents_delete_delete_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Delete Document
     * @param documents_delete_delete_request
     */
    public delete(documents_delete_delete_request: DocumentsDeleteDeleteRequest, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.delete(documents_delete_delete_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Document Info
     * @param [document_id] 
     */
    public getWithHttpInfo(document_id?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getWithHttpInfo(document_id, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Document Info
     * @param [document_id] 
     */
    public get(document_id?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.get(document_id, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Document By Workspace
     * @param [workspace_id] 
     */
    public listWithHttpInfo(workspace_id?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWithHttpInfo(workspace_id, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Document By Workspace
     * @param [workspace_id] 
     */
    public list(workspace_id?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.list(workspace_id, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Move Document
     * @param documents_move_post_request
     */
    public moveWithHttpInfo(documents_move_post_request: DocumentsMovePostRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.moveWithHttpInfo(documents_move_post_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Move Document
     * @param documents_move_post_request
     */
    public move(documents_move_post_request: DocumentsMovePostRequest, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.move(documents_move_post_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Restore Document 
     * @param documents_restore_post_request
     */
    public restoreWithHttpInfo(documents_restore_post_request: DocumentsRestorePostRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.restoreWithHttpInfo(documents_restore_post_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Restore Document 
     * @param documents_restore_post_request
     */
    public restore(documents_restore_post_request: DocumentsRestorePostRequest, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.restore(documents_restore_post_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Stream Document Copy
     * @param body
     * @param [document_id] 
     */
    public streamWithHttpInfo(body: any, document_id?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.streamWithHttpInfo(body, document_id, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Stream Document Copy
     * @param body
     * @param [document_id] 
     */
    public stream(body: any, document_id?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.stream(body, document_id, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Update Document
     * @param documents_update_put_request
     */
    public updateWithHttpInfo(documents_update_put_request: DocumentsUpdatePutRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateWithHttpInfo(documents_update_put_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Update Document
     * @param documents_update_put_request
     */
    public update(documents_update_put_request: DocumentsUpdatePutRequest, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.update(documents_update_put_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Upload Document 
     * @param [workspace_id] 
     * @param [folder_id] 
     * @param [file1]
     * @param [file2]
     */
    public uploadWithHttpInfo(workspace_id?: string, folder_id?: string, file1?: HttpFile, file2?: HttpFile, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.uploadWithHttpInfo(workspace_id, folder_id, file1, file2, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Upload Document 
     * @param [workspace_id] 
     * @param [folder_id] 
     * @param [file1]
     * @param [file2]
     */
    public upload(workspace_id?: string, folder_id?: string, file1?: HttpFile, file2?: HttpFile, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.upload(workspace_id, folder_id, file1, file2, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFoldersApi } from './ObservableAPI';

import { FoldersApiRequestFactory, FoldersApiResponseProcessor} from "../apis/FoldersApi";
export class PromiseFoldersApi {
    private api: ObservableFoldersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FoldersApiRequestFactory,
        responseProcessor?: FoldersApiResponseProcessor
    ) {
        this.api = new ObservableFoldersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * Get Folder Content
     * @param [folder_id] 
     */
    public contentWithHttpInfo(folder_id?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.contentWithHttpInfo(folder_id, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Folder Content
     * @param [folder_id] 
     */
    public content(folder_id?: Array<string>, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.content(folder_id, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Create Folder
     * @param folders_create_post_request
     */
    public createWithHttpInfo(folders_create_post_request: FoldersCreatePostRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createWithHttpInfo(folders_create_post_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Create Folder
     * @param folders_create_post_request
     */
    public create(folders_create_post_request: FoldersCreatePostRequest, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.create(folders_create_post_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Delete Folder
     * @param folders_delete_delete_request
     */
    public deleteWithHttpInfo(folders_delete_delete_request: FoldersDeleteDeleteRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteWithHttpInfo(folders_delete_delete_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Delete Folder
     * @param folders_delete_delete_request
     */
    public delete(folders_delete_delete_request: FoldersDeleteDeleteRequest, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.delete(folders_delete_delete_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Folder Details
     * @param [folder_id] 
     */
    public getWithHttpInfo(folder_id?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getWithHttpInfo(folder_id, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Folder Details
     * @param [folder_id] 
     */
    public get(folder_id?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.get(folder_id, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Folders 
     * @param workspace_id 
     */
    public listWithHttpInfo(workspace_id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWithHttpInfo(workspace_id, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Folders 
     * @param workspace_id 
     */
    public list(workspace_id: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.list(workspace_id, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Move Folder
     * @param folders_delete_delete_request
     */
    public moveWithHttpInfo(folders_delete_delete_request: FoldersDeleteDeleteRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.moveWithHttpInfo(folders_delete_delete_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Move Folder
     * @param folders_delete_delete_request
     */
    public move(folders_delete_delete_request: FoldersDeleteDeleteRequest, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.move(folders_delete_delete_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Update Folder
     * @param folders_update_put_request
     */
    public updateWithHttpInfo(folders_update_put_request: FoldersUpdatePutRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateWithHttpInfo(folders_update_put_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Update Folder
     * @param folders_update_put_request
     */
    public update(folders_update_put_request: FoldersUpdatePutRequest, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.update(folders_update_put_request, observableOptions);
        return result.toPromise();
    }


}



import { ObservableTeamsApi } from './ObservableAPI';

import { TeamsApiRequestFactory, TeamsApiResponseProcessor} from "../apis/TeamsApi";
export class PromiseTeamsApi {
    private api: ObservableTeamsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TeamsApiRequestFactory,
        responseProcessor?: TeamsApiResponseProcessor
    ) {
        this.api = new ObservableTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * Create Team
     * @param teams_create_post_request
     */
    public createWithHttpInfo(teams_create_post_request: TeamsCreatePostRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createWithHttpInfo(teams_create_post_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Create Team
     * @param teams_create_post_request
     */
    public create(teams_create_post_request: TeamsCreatePostRequest, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.create(teams_create_post_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Team Data
     */
    public dashboardWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.dashboardWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Team Data
     */
    public dashboard(_options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.dashboard(observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Delete Team
     * @param teams_delete_delete_request
     */
    public deleteWithHttpInfo(teams_delete_delete_request: TeamsDeleteDeleteRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteWithHttpInfo(teams_delete_delete_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Delete Team
     * @param teams_delete_delete_request
     */
    public delete(teams_delete_delete_request: TeamsDeleteDeleteRequest, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.delete(teams_delete_delete_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Account Teams
     */
    public listWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Account Teams
     */
    public list(_options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.list(observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Team Details
     * @param body
     * @param [team_id] 
     */
    public getWithHttpInfo(body: any, team_id?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getWithHttpInfo(body, team_id, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Team Details
     * @param body
     * @param [team_id] 
     */
    public get(body: any, team_id?: Array<string>, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.get(body, team_id, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Team logs
     * @param [team_id] team Id
     * @param [page] 
     * @param [limit] 
     */
    public logsWithHttpInfo(team_id?: Array<string>, page?: string, limit?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.logsWithHttpInfo(team_id, page, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Team logs
     * @param [team_id] team Id
     * @param [page] 
     * @param [limit] 
     */
    public logs(team_id?: Array<string>, page?: string, limit?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.logs(team_id, page, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Update Team Data
     * @param teams_update_put_request
     */
    public updateWithHttpInfo(teams_update_put_request: TeamsUpdatePutRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateWithHttpInfo(teams_update_put_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Update Team Data
     * @param teams_update_put_request
     */
    public update(teams_update_put_request: TeamsUpdatePutRequest, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.update(teams_update_put_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Team workspaces
     * @param [team_id] team Id
     */
    public workspacesWithHttpInfo(team_id?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.workspacesWithHttpInfo(team_id, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Team workspaces
     * @param [team_id] team Id
     */
    public workspaces(team_id?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.workspaces(team_id, observableOptions);
        return result.toPromise();
    }


}



import { ObservableTeamsMembersApi } from './ObservableAPI';

import { TeamsMembersApiRequestFactory, TeamsMembersApiResponseProcessor} from "../apis/TeamsMembersApi";
export class PromiseTeamsMembersApi {
    private api: ObservableTeamsMembersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TeamsMembersApiRequestFactory,
        responseProcessor?: TeamsMembersApiResponseProcessor
    ) {
        this.api = new ObservableTeamsMembersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * Add Team Member Copy
     * @param teams_members_add_post_request
     */
    public addWithHttpInfo(teams_members_add_post_request: TeamsMembersAddPostRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addWithHttpInfo(teams_members_add_post_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Add Team Member Copy
     * @param teams_members_add_post_request
     */
    public add(teams_members_add_post_request: TeamsMembersAddPostRequest, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.add(teams_members_add_post_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Team Members
     * @param [team_id] 
     * @param [page] 
     * @param [limit] 
     */
    public listWithHttpInfo(team_id?: string, page?: number, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWithHttpInfo(team_id, page, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Team Members
     * @param [team_id] 
     * @param [page] 
     * @param [limit] 
     */
    public list(team_id?: string, page?: number, limit?: number, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.list(team_id, page, limit, observableOptions);
        return result.toPromise();
    }


}



import { ObservableWorkspacesApi } from './ObservableAPI';

import { WorkspacesApiRequestFactory, WorkspacesApiResponseProcessor} from "../apis/WorkspacesApi";
export class PromiseWorkspacesApi {
    private api: ObservableWorkspacesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WorkspacesApiRequestFactory,
        responseProcessor?: WorkspacesApiResponseProcessor
    ) {
        this.api = new ObservableWorkspacesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * Create New Workspace
     * @param workspaces_create_post_request
     */
    public createWithHttpInfo(workspaces_create_post_request: WorkspacesCreatePostRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createWithHttpInfo(workspaces_create_post_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Create New Workspace
     * @param workspaces_create_post_request
     */
    public create(workspaces_create_post_request: WorkspacesCreatePostRequest, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.create(workspaces_create_post_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Delete workspace
     * @param workspaces_delete_delete_request
     */
    public deleteWithHttpInfo(workspaces_delete_delete_request: WorkspacesDeleteDeleteRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteWithHttpInfo(workspaces_delete_delete_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Delete workspace
     * @param workspaces_delete_delete_request
     */
    public delete(workspaces_delete_delete_request: WorkspacesDeleteDeleteRequest, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.delete(workspaces_delete_delete_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Workspace Details
     * @param [workspace_id] 
     */
    public getWithHttpInfo(workspace_id?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getWithHttpInfo(workspace_id, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Workspace Details
     * @param [workspace_id] 
     */
    public get(workspace_id?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.get(workspace_id, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Account Drive
     */
    public driveWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.driveWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Account Drive
     */
    public drive(_options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.drive(observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Workspaces By Team
     * @param [team_id] team Id
     */
    public listWithHttpInfo(team_id?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWithHttpInfo(team_id, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Workspaces By Team
     * @param [team_id] team Id
     */
    public list(team_id?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.list(team_id, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Team Workspaces
     * @param [team_id] 
     */
    public byTeamWithHttpInfo(team_id?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.byTeamWithHttpInfo(team_id, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Get Team Workspaces
     * @param [team_id] 
     */
    public byTeam(team_id?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.byTeam(team_id, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Update workspace
     * @param workspaces_update_put_request
     */
    public updateWithHttpInfo(workspaces_update_put_request: WorkspacesUpdatePutRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateWithHttpInfo(workspaces_update_put_request, observableOptions);
        return result.toPromise();
    }

    /**
     * 
     * Update workspace
     * @param workspaces_update_put_request
     */
    public update(workspaces_update_put_request: WorkspacesUpdatePutRequest, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.update(workspaces_update_put_request, observableOptions);
        return result.toPromise();
    }


}



